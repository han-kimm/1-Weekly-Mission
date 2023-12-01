import logoImg from "@/public/logo.svg";
import { Container, H1, Img } from "@/pages/404.styled";
import Link from "next/link";

function ErrorPage() {
  return (
    <Container>
      <Link href="/">
        <Img src={logoImg} alt="로고 이미지" />
      </Link>
      <H1>
        찾는 페이지가 존재하지 않습니다.
        <br />
        로고를 눌러 홈페이지로 돌아가세요.
      </H1>
    </Container>
  );
}

export default ErrorPage;
