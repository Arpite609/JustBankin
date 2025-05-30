import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = () => {
  const loggedIn={firstName:'Dev', lastName:'Arpit', email:'snowflaker6090@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName||'User'}
            subtext='Here’s what’s happening with your account today'
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={150}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn} 
        transactions={[]}
        banks={[{currentBalance:'123'},{currentBalance:'456'}]}
      />
    </section>
  )
}

export default Home