import React from 'react';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom color="primary">
          Admin Panel
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to your admin dashboard. You can manage employee data from here.
        </Typography>
        <Box mt={3}>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={() => navigate('/employees')}
          >
            Show Employee Data
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminPage;
