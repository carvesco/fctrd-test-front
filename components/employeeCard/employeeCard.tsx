import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import SkillsModal from '../skillsModal/skillsModal';

const EmployeeCard = (props: any) => {
  console.log(props);
  const [openSkillModal, setOpenSkillModal] = React.useState(false);
  const [employeeId, setEmployeeId] = React.useState();
  return (
    <>
      {props?.props && (
        <>
          <Card
            sx={{
              width: '90%',
              bgcolor: '#f1faee',
              borderRadius: '25px',
              borderWidth: '3px',
              borderColor: '#457b9d',
              borderStyle: 'solid',
              mt: 5,
              ml:"auto",
              mr:"auto",
              boxShadow: "10px"
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Avatar
                  alt="Remy Sharp"
                  src={`https://i.pravatar.cc/150?u=${props?.props?.name}`}
                  sx={{ width: '20%', height: '20%' }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#1d3557', textAlign: 'center', mr: 2 }}>
                      {props.props.name}
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#1d3557', textAlign: 'center' }}>
                      {props.props.lastname}
                    </Typography>
                  </Box>
                  <Typography variant="h5" sx={{ color: '#1d3557', textAlign: 'center' }}>
                    {props?.props?.position}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',mb:2 }}>
              <Button
                variant="outlined"
                size="large"
                sx={{ width: '80%', borderColor: '#457b9d', color: '#457b9d' }}
                onClick={() => {
                  setOpenSkillModal(true);
                  console.log(props);
                  setEmployeeId(props?.props?.id);
                }}
              >
                Skills
              </Button>
            </CardActions>
          </Card>
          <SkillsModal open={openSkillModal} setModal={setOpenSkillModal} employeeId={employeeId} />
        </>
      )}
    </>
  );
};

export default EmployeeCard;
