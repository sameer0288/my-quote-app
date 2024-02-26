
import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/system';
import api from '../../services/api';


interface Dialogue {
  id: number;
  text: string;
  series: string;
  character: string;
}

const StyledContainer = styled(Container)({
  marginTop: '2rem',
});

const StyledTitle = styled(Typography)({
  marginTop: '2rem',
  marginBottom: '3rem',
  fontSize: '3rem',
  textAlign: 'center',
  position: 'relative',
  '&::after': {
    content: "''",
    display: 'block',
    height: '2px',
    width: '10rem', 
    background: '#007bff', 
    marginTop:"20rem",
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  '@media (max-width: 450px)': {
    fontSize: '2rem', 
  },
});


const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
  transition: 'box-shadow 0.3s ease, background-color 0.3s ease, cursor 0.3s ease, transform 0.3s ease',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f5f5f5', 
    cursor: 'pointer',
    transform: 'rotate(2deg)', 
  },
});


const StyledCardContent = styled(CardContent)({
  flex: 1,
});

const StyledCharacter = styled(Typography)({
  marginTop: '1rem',
  textAlign: 'right',
});

const DialoguesPage: React.FC = () => {
  const [dialogues, setDialogues] = useState<Dialogue[]>([]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/dialogues');
        setDialogues(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <StyledContainer>
      <StyledTitle variant="h1">Famous Dialogues</StyledTitle>
      <Grid container spacing={3}>
        {dialogues.map((dialogue) => (
          <Grid item key={dialogue.id} xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <Typography variant="body1" color="textSecondary">
                  {dialogue.text}
                </Typography>
                <StyledCharacter variant="body2" color="textPrimary">
                  - {dialogue.character}, {dialogue.series}
                </StyledCharacter>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

   
    </StyledContainer>
  );
};

export default DialoguesPage;
