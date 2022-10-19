import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillsModal = (props: any) => {
  console.log(props);
  const [skills, setSkills] = React.useState<any[]>([]);
  const [skillsData, setSkillsData] = React.useState({
    labels: [],
    datasets: [
      {
        label: 'skill level',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  });
  const handleClose = () => props.setModal(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '25px',
    borderWidth: '5px',
    borderColor: '#457b9d',
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    bgcolor: '#f1faee',
  };
  useEffect(() => {
    const getSkills = async () => {
      try {
        const { data, status } = await axios.get(`http://127.0.0.1:8000/employees/${props?.employeeId}`, {
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          },
        });
        if (data) {
          console.log(data);
          setSkills(data);
          const skills = data.map((item: any) => item.skillname);
          const skillslevel = data.map((item: any) => item.skillLevel);
          let ds = {
            label: 'skill level',
            data: skillslevel,
            backgroundColor: 'rgba(69, 123, 157, 0.4)',
            borderColor: 'rgba(69, 123, 157, 1)',
            borderWidth: 1,
          };
          console.log(skillslevel);
          setSkillsData((prevState) => ({
            ...prevState,
            labels: skills,
            datasets: [ds],
          }));
        }
        console.log(skillsData);
      } catch (err) {
        console.log(err);
      }
    };
    if (props?.employeeId) {
      getSkills();
    }
  }, [props?.employeeId]);
  return (
    <>
      {skills.length > 0 && (
        <Modal
          open={props.open}
          onClose={handleClose}
          aria-labelledby="skill-modal-title"
          aria-describedby="skill-modal"
        >
          <Box sx={style}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ color: '#1d3557', textAlign: 'center',mr:2 }} variant="h4">
                {skills[0].name}
              </Typography>
              <Typography sx={{ color: '#1d3557', textAlign: 'center' }} variant="h4">
                {skills[0].lastname}
              </Typography>
            </Box>
            <Typography sx={{ color: '#1d3557', textAlign: 'center' }} variant="h5">
              {skills[0].position}
            </Typography>
            <Radar data={skillsData} />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default SkillsModal;
