import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useNavigate } from 'react-router-dom';
import './EmployeeTable.css';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => setEmployees(data.users))
      .catch((err) => console.log('Error fetching data:', err));
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc', p: 3 }}>
      <Paper elevation={4} sx={{ borderRadius: 4, p: 3 }}>

        {/* Custom Header */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 4,
            height: 120
          }}
        >
          {/* Left Button */}
          <Box sx={{ position: 'absolute', left: 0 }}>
            <Button
              variant="outlined"
              startIcon={<PersonRemoveIcon />}
              sx={{
                borderColor: '#e11d48',
                color: '#e11d48',
                fontWeight: 'bold',
                px: 3,
                '&:hover': {
                  backgroundColor: '#fee2e2'
                }
              }}
            >
              Delete
            </Button>
          </Box>

          {/* Circle Title */}
          <Box
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #cbd5e1, #f1f5f9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: 'center', fontWeight: 'bold', color: '#334155' }}
            >
              Manage<br />Employees
            </Typography>
          </Box>

          {/* Right Button */}
          <Box sx={{ position: 'absolute', right: 0 }}>
            <Button
              variant="contained"
              startIcon={<PersonAddAltIcon />}
              sx={{
                bgcolor: '#10b981',
                fontWeight: 'bold',
                px: 3,
                '&:hover': {
                  bgcolor: '#059669'
                }
              }}
            >
              Add New
            </Button>
          </Box>
        </Box>

        {/* Table Section */}
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>

            <TableHead>
              <TableRow sx={{ bgcolor: '#cbd5e1' }}>
                {['Name', 'Email', 'Address', 'Phone', 'View', 'Actions'].map((title) => (
                  <TableCell
                    key={title}
                    sx={{
                      color: '#1e293b',
                      fontWeight: 'bold',
                      fontSize: '15px',
                      border: '2px solid #000000ff'
                    }}
                  >
                    {title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {employees.map((emp, index) => (
                <TableRow
                  key={emp.id}
                  sx={{
                    backgroundImage: 'linear-gradient(to right, #fff788, #b7bcc4)',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <TableCell sx={{ border: '2px solid #e1e1cbff' }}>
                    {emp.firstName} {emp.lastName}
                  </TableCell>
                  <TableCell sx={{ border: '1px solid #cbd5e1' }}>
                    {emp.email}
                  </TableCell>
                  <TableCell sx={{ border: '1px solid #cbd5e1' }}>
                    {emp.address.address}, {emp.address.city}
                  </TableCell>
                  <TableCell sx={{ border: '1px solid #cbd5e1' }}>
                    {emp.phone}
                  </TableCell>
                  <TableCell sx={{ border: '1px solid #cbd5e1' }}>
                    <Button
                      variant="text"
                      sx={{ color: '#000', fontWeight: 'bold' }}
                      onClick={() => navigate(`/user/${emp.id}`)}
                    >
                      View
                    </Button>
                  </TableCell>
                  <TableCell sx={{ border: '1px solid #cbd5e1' }}>
                    <IconButton>
                      <EditNoteIcon sx={{ color: '#0ea5e9' }} />
                    </IconButton>
                    <IconButton>
                      <DeleteForeverIcon sx={{ color: '#ef4444' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default EmployeeTable;
