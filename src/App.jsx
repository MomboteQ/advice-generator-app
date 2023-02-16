import { useEffect, useState } from 'react'

import { ReactComponent as PatternDividerMobile } from './assets/img/pattern-divider-mobile.svg'
import { ReactComponent as PatternDividerDesktop } from './assets/img/pattern-divider-desktop.svg'
import { ReactComponent as IconDice } from './assets/img/icon-dice.svg'

function App() {
	const [adviceId, setAdviceId] = useState('')
	const [advice, setAdvice] = useState('')
	const [loading, setLoading] = useState(true)

	function getAdvice() {
		fetch('https://api.adviceslip.com/advice').then((res) => res.json()).then((data) => {
			setAdviceId(data.slip.id)
			setAdvice(data.slip.advice)
		}).finally(() => setLoading(false))
	}

	useEffect(() => {
		getAdvice()
	})

	return (
		<main className={`h-screen flex flex-col justify-center items-center p-[1rem] animate-[fade_.5s] ${ loading ? 'hidden' : 'block' }`}>
			<div className='bg-dark-grayish-blue flex flex-col px-[1.5rem] py-[3rem] items-center rounded-[.8rem] max-w-[33.75rem] relative md:px-[3rem]'>
				<h1 className='text-neon-green tracking-[.2rem] text-[.7rem] uppercase mb-[1.5rem] leading-none'>Advice #{adviceId}</h1>
				<p className='text-[1.5rem] text-center leading-[2rem] text-light-cyan mb-[1.5rem] md:text-[1.75rem] md:leading-[2.5rem]'>“{ advice }”</p>
				<PatternDividerMobile className='mb-[1.8rem] md:hidden' />
				<PatternDividerDesktop className='mb-[1.8rem] hidden md:block' />
			</div>
			<button className='bg-neon-green p-[1.25rem] rounded-full translate-y-[-2rem] transition-shadow duration-[.3s] hover:shadow-neon-green hover:shadow-[0_0_2rem_0]' onClick={ () => getAdvice() }>
				<IconDice />
			</button>
			<div className='text-light-cyan mt-[1rem] tracking-wider text-[.9rem] text-center'>
				Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noopener noreferrer'>Frontend Mentor</a>. 
    			Coded by <a href="https://MomboteQ.github.io">MomboteQ</a>.
			</div>
		</main>
	)
}

export default App;