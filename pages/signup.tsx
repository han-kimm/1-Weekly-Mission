import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <section className="login">
        <div className="grid--logo">
          <Link className="login__logo" href="/">
            <Image width={1} height={1} className="login__img" src="index/logo.svg" alt="선택하면 홈화면으로 연결됩니다" />
          </Link>
          <p className="login__text">
            이미 회원이신가요?
            <Link className="login__link" href="/signin">
              로그인 하기
            </Link>
          </p>
        </div>
        <form className="form grid--form">
          <label className="form__label margin-top30" id="labelEm">
            이메일
            <input className="form__input" type="email" name="email" id="inputEm" />
            <p className="form__err" id="pEm"></p>
          </label>
          <label className="form__label" id="labelPw">
            비밀번호
            <input className="form__input password" type="password" name="password" id="inputPw" />
            <button className="form__input-btn form__input-btn--absolute" type="button" name="passwordBtn" id="buttonPw">
              <Image width={1} height={1} className="form__img" id="imgPw" src="index/sign-eye-off.svg" alt="가려진 비밀번호 보여주기" />
            </button>
            <p className="form__err" id="pPw"></p>
          </label>
          <label className="form__label" id="labelCh">
            비밀번호 확인
            <input className="form__input password" type="password" name="passwordCheck" id="inputCh" />
            <button className="form__input-btn form__input-btn--absolute" type="button" name="passwordCheckBtn" id="buttonCh">
              <img className="form__img" id="imgCh" src="index/sign-eye-off.svg" alt="가려진 비밀번호 보여주기" />
            </button>
            <p className="form__err" id="pCh"></p>
          </label>
          <button className="form__submit margin-top30" name="submit" id="buttonSub">
            로그인
          </button>
        </form>
        <div className="form__sns grid--sns margin-top30">
          <p>소셜 계정으로 가입하기</p>
          <div>
            <Link href="https://www.google.com" target="_blank">
              <Image width={20} height={20} className="form__sns-img" src="index/sign-google.svg" alt="구글 계정으로 회원가입" />
            </Link>
            <Link href="https://www.kakaocorp.com/page/" target="_blank">
              <Image width={20} height={20} className="form__sns-img" src="index/sign-kako.svg" alt="카카오 계정으로 회원가입" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
