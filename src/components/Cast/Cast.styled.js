import styled from 'styled-components';

export const ActorListWrapper = styled.div`
  margin-top: 20px;
`;

export const ActorCardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

export const ActorCard = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  max-width: 100px;
  text-align: center;
`;

export const ActorImage = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ActorDetails = styled.div`
  margin-top: 10px;
`;

export const ActorName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

export const ActorCharacter = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #888;
`;
