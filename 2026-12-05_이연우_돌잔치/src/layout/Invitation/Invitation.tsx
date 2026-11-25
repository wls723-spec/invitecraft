import styled from '@emotion/styled';
import data from '@/data.json';
import { Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting, parents, shortName, birthDate } = data;

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <SignatureBlock>
        <ParentsRow>
          <ParentsName>
            {parents.father} · {parents.mother}
          </ParentsName>
          <Relation>의 아들</Relation>
          <BabyName>{shortName}</BabyName>
        </ParentsRow>
        <BirthText>{birthDate} 탄생</BirthText>
      </SignatureBlock>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SignatureBlock = styled.div`
  width: 100%;
  max-width: 290px;
  margin-top: 32px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const ParentsRow = styled.div`
  font-family: var(--font-serif);
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  color: var(--ink);
`;

const ParentsName = styled.span`
  font-size: 1.04rem;
  font-weight: 700;
`;

const Relation = styled.span`
  font-size: 0.88rem;
  color: var(--muted);
`;

const BabyName = styled.span`
  font-size: 1.12rem;
  font-weight: 700;
  color: var(--accent);
`;

const BirthText = styled.span`
  font-family: var(--font-display);
  font-size: 0.86rem;
  letter-spacing: 0.08em;
  color: var(--muted);
`;
