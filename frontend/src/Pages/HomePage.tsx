import HeroLogged from "../components/Hero/HeroLogged"
import HeroVisitor from "../components/Hero/HeroVisitor"

const HomePage = () => {
  return (
    <div className="container">
        <HeroLogged />
        <HeroVisitor />
    </div>
  )
}

export default HomePage