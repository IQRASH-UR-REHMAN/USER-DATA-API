import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Container,
  Typography,
  Paper,
  CircularProgress,
  Grid,
  Button
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    return (
      <Typography variant="h6" textAlign="center" mt={10}>
        User not found
      </Typography>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #fffde7, #e2e8f0)'
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Avatar
            src={user.image}
            sx={{
              width: 100,
              height: 100,
              margin: 'auto',
              mb: 1,
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#334155' }}>
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            @{user.username}
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography><strong>Email:</strong> {user.email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography><strong>Phone:</strong> {user.phone}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography><strong>Birth Date:</strong> {user.birthDate}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography><strong>Gender:</strong> {user.gender}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <strong>Company:</strong> {user.company.name} — {user.company.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <strong>Address:</strong> {user.address.address}, {user.address.city}, {user.address.state} - {user.address.postalCode}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            onClick={() => navigate('/employees')}
            sx={{
              bgcolor: '#10b981',
              fontWeight: 'bold',
              px: 4,
              py: 1,
              '&:hover': {
                bgcolor: '#059669'
              }
            }}
          >
            Back to Employee Table
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserDetails;
