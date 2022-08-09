import { LeftBox, RightBox, MainBox } from "./style"

export default function Signup() {
  return (
    <MainBox>
      <LeftBox>
        <h1>linkr</h1>
        <h2>save, share and discover<br></br>the best links on the web</h2>
      </LeftBox>

      <RightBox>
      <form /* onSubmit={submitData} */>
        <input
          type="email"
          /* disabled={loading ? true : false} */
          placeholder="e-mail"
          /* value={name}
          onChange={(e) => setName(e.target.value)}  *//>

        <input
          type="password"
          /* disabled={loading ? true : false} */
          placeholder="password"
          /* value={email}
          onChange={(e) => setEmail(e.target.value)} */ />

        <input
          type="text"
          /* disabled={loading ? true : false} */
          placeholder="username"
          /* value={password}
          onChange={(e) => setPassword(e.target.value)} */ />

        <input
          type="text"
          /* disabled={loading ? true : false} */
          placeholder="picture url"
          /* value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} */ />


        <button type="submit"> cadastrar
          {/* {{loading ? (
            <ThreeDots color="#FFFFFF" height={13} align='center' />
          ) : (
            'Cadastrar'
          )}} */}
        </button>
      </form>
      <h3>Switch back to log in</h3>
      </RightBox>
    </MainBox>
  );
}