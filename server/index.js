const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '../client/public')));

// Temporary static data
const designers = [
  {
    id: 1,
    teamName: 'Urban Nest Interiors',
    rating: 4.8,
    description: 'Urban Nest Interiors specializes in modern, functional spaces with a touch of luxury. Our team brings your vision to life with creative solutions and attention to detail.',
    totalProjects: 32,
    experience: 7,
    price: '25k'
  },
  {
    id: 2,
    teamName: 'Studio Harmony',
    rating: 4.6,
    description: 'Studio Harmony is known for blending contemporary and traditional styles. We focus on sustainable materials and personalized service for every client.',
    totalProjects: 21,
    experience: 5,
    price: '18k'
  },
  {
    id: 3,
    teamName: 'The Design Collective',
    rating: 4.9,
    description: 'The Design Collective delivers high-end interiors for residential and commercial spaces. Our award-winning designers ensure every project is unique and timeless.',
    totalProjects: 40,
    experience: 10,
    price: '30k'
  },
  {
    id: 4,
    teamName: 'Minimalist Living',
    rating: 4.7,
    description: 'Minimalist Living creates serene, clutter-free environments. We believe less is more and help you achieve a calm, organized home.',
    totalProjects: 15,
    experience: 4,
    price: '15k'
  }
  // Add more designers as needed
];

app.get('/api/designers', (req, res) => {
  res.json(designers);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
