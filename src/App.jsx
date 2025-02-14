
import './App.css'
import ContentSection from './component/ContentSection'
import Header from './component/Header'
import HeaderTop from './component/HeaderTop'
import ProductList1 from './component/ProductList1'
import ProductList2 from './component/ProductList2'

function App() {
  

  return (
    <>
     <div>
      <HeaderTop/>
      <Header />
      <ContentSection/>
      <ProductList2/>
      <ProductList1/>
     </div>
    </>
  )
}

export default App
