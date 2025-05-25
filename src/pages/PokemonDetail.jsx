import { useNavigate, useLocation } from "react-router-dom";

export default function PokemonDetail() {
  const navigate = useNavigate();
  // 나중에 query string(id)을 꺼내서 상세 정보 로직 추가
  return (
    <div>
      <h1>포켓몬 상세 페이지</h1>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}
