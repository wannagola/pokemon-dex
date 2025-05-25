import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`;

const Card = styled.div`
  text-align: center;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: auto;
  display: block;
  margin: 0 auto 4px;
`;

const RemoveButton = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background: #e00;
  color: white;
  cursor: pointer;

  &:hover {
    background: #c00;
  }
`;

export default function Dashboard({ selected, setSelected }) {
  const handleRemove = (id) => {
    setSelected(selected.filter((p) => p.id !== id));
  };

  return (
    <Wrapper>
      <h2>선택된 포켓몬</h2>
      <Grid>
        {selected.length === 0 && <p>선택된 포켓몬이 없습니다.</p>}
        {selected.map((p) => (
          <Card key={p.id}>
            <Thumbnail src={p.img_url} alt={p.korean_name} />
            <p>{p.korean_name}</p>
            <RemoveButton onClick={() => handleRemove(p.id)}>
              삭제
            </RemoveButton>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}
