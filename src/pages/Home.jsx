import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>내 포켓몬 도감에 오신 것을 환영합니다!</h1>
      <button onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </button>
    </div>
  );
}
