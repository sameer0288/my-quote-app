
import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/system';
import api from '../../services/api';
import FilterTab from '../../components/FilterTab';

interface Quote {
  authors: string[];
  quotes: {
    id: number;
    text: string;
    author: string;
    character: string;
    series: string;
  }[];
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
    marginTop: '20rem',
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

const QuotesPage: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote>({ authors: [], quotes: [] });
  const [filteredAuthor, setFilteredAuthor] = useState<string>('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/quotes');
        setQuotes({
          authors: response.data.authors,
          quotes: response.data.quotes,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredQuotes = filteredAuthor === 'All'
    ? quotes.quotes
    : quotes.quotes.filter(quote => quote.author === filteredAuthor);

  return (
    <StyledContainer>
      <StyledTitle variant="h1">Famous Quotes</StyledTitle>
      <FilterTab options={quotes.authors} onSelect={setFilteredAuthor} />
      <Grid container spacing={3}>
        {filteredQuotes.map((quoteGroup) => (
          <Grid item key={quoteGroup.id} xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <Typography variant="body1" color="textSecondary">
                  {quoteGroup.text}
                </Typography>
                <StyledCharacter variant="body2" color="textPrimary">
                  - {quoteGroup.author}
                </StyledCharacter>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default QuotesPage;
