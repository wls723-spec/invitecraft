import styled from '@emotion/styled';
import data from '@/data.json';
import { Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting, parents, shortName, birthDate } = data;

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <FamilyCard>
        <FamilyRow>
          <ParentsName>
            {parents.father} · {parents.mother}
          </ParentsName>
          <Relation>의 아들</Relation>
          <BabyName>{shortName}</BabyName>
        </FamilyRow>
        <BirthNote>{birthDate}</BirthNote>
      </FamilyCard>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

const FamilyCard = styled.div`
  width: 100%;
  padding: 16px 14px;
  border-radius: 14px;
  background-color: #f7f9f4;
  border: 1px solid #e3eadb;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const FamilyRow = styled.div`
  font-family: 'HSSanTokki20-Regular', serif;
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  color: #2f2120;
`;

const ParentsName = styled.span`
  font-size: 1.08rem;
`;

const Relation = styled.span`
  font-size: 0.92rem;
  color: #6d615e;
`;

const BabyName = styled.span`
  font-size: 1.22rem;
  color: #d97a96;
`;

const BirthNote = styled.span`
  font-size: 0.82rem;
  color: #778571;
  letter-spacing: 0.04em;
`;
