function userInfo() {
  return (
    <>
      <h1 className="userInfo-heading">CHOOSE YOUR PERFECT BODY</h1>
      <form className="userInfo-form">
        <div>
          <label>NAME: </label>
          <input type="text"></input>
        </div>
        <div>
          <label>AGE: </label>
          <input type="number" placeholder=""></input>
        </div>
        <div>
          <label>HEIGHT: </label>
          <input type="number" placeholder="cm"></input>
        </div>
        <div>
          <label>WEIGHT: </label>
          <input type="number" placeholder="kg"></input>
        </div>
        <div>
          <label>TARGET WEIGHT: </label>
          <input type="number" placeholder="kg"></input>
        </div>
      </form>
    </>
  )
}

export default userInfo
