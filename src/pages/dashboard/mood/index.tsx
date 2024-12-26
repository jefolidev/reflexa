import { MoodChart } from '../components/chart'
import { MoodCard } from './components/mood-card'

/*
  TODO 
  - Desempenhar uma função melhor para o card que contém tags 
*/

export function MoodSection() {
	return (
		<section className="flex justify-around gap-5 h-64 ">
			<MoodCard />
			<div className="w-52 h-full flex-auto bg-stone-900 flex flex-col justify-between items-enter rounded-2xl px-6 py-8">
				<header>
					<h2>Que bom que você está contente!</h2>
				</header>
				<footer className="flex gap-2">
					<div className="bg-white h-5 p-3  inline-flex items-center rounded-full flex-initial  hover:cursor-pointer hover:bg-gray-200">
						<span className="text-xs font-semibold font-monts ">
							Falar com um amigo 📱
						</span>
					</div>
					<div className="bg-white h-5  inline-flex items-center p-3 rounded-full flex-initial  hover:cursor-pointer  hover:bg-gray-200">
						<span className="text-xs font-semibold font-monts ">
							Assistir um filme 📺
						</span>
					</div>
				</footer>
			</div>
			<MoodChart type="mood" analytics="+25%" result={'Mais Feliz'} />
		</section>
	)
}
