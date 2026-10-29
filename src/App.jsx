import { Routes, Route } from 'react-router-dom'



function App() {


  return (
    <Routes>
      <Route index element={<></>}></Route>
      {/* 로그인 */}
      <Route path="" element={<></>}>
        <Route index element={<></>}></Route>
        {/* 대시보드 */}
        <Route path="" element={<></>}>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route>
        </Route>
        {/* 메뉴관리 */}
        <Route path="" element={<></>}>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route></Route>
        {/* 재고관리 */}
        <Route path="" element={<></>}>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route>
        </Route>
        {/* 주문관리 */}
        <Route path="" element={<></>}>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route>
        </Route>
        {/* 직원관리 */}
      </Route>
      {/* 매장관리시스템 */}
    </Routes>
  )
}

export default App
