import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  allJobs: [
    {
      id: nanoid(),
      type: 'Part Time',
      salary: '15k / Mo',
      title: 'UI/UX Designer',
      company: 'Epic coders',
      skills: ['UI', 'UX', 'PHOTOSHOP'],
      description: 'We are looking for an experienced UI and UX designer to work on our new projects ...',
    },
    {
      id: nanoid(),
      type: 'Full Time',
      salary: '20k / Mo',
      title: 'Web Developer',
      company: 'Infracom Ltd.',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],
      description: 'Looking for an experienced person to help us with rebranding our business. We are interested in a ...',
    },
    {
      id: nanoid(),
      type: 'Part Time',
      salary: '15k / Mo',
      title: 'UI/UX Designer',
      company: 'Epic coders',
      skills: ['UI', 'UX', 'PHOTOSHOP'],
      description: 'We are looking for an experienced UI and UX designer to work on our new projects ...',
    },
    {
      id: nanoid(),
      type: 'Full Time',
      salary: '25k / Mo',
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      skills: ['JavaScript', 'React', 'Node.js'],
      description: 'Join our team to work on cutting-edge software solutions ...',
    },
    {
      id: nanoid(),
      type: 'Part Time',
      salary: '15k / Mo',
      title: 'UI/UX Designer',
      company: 'Epic coders',
      skills: ['UI', 'UX', 'PHOTOSHOP'],
      description: 'We are looking for an experienced UI and UX designer to work on our new projects ...',
    },
    {
      id: nanoid(),
      type: 'Full Time',
      salary: '20k / Mo',
      title: 'Web Developer',
      company: 'Infracom Ltd.',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],
      description: 'Looking for an experienced person to help us with rebranding our business. We are interested in a ...',
    },
    {
      id: nanoid(),
      type: 'Part Time',
      salary: '15k / Mo',
      title: 'UI/UX Designer',
      company: 'Epic coders',
      skills: ['UI', 'UX', 'PHOTOSHOP'],
      description: 'We are looking for an experienced UI and UX designer to work on our new projects ...',
    },
    {
      id: nanoid(),
      type: 'Full Time',
      salary: '25k / Mo',
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      skills: ['JavaScript', 'React', 'Node.js'],
      description: 'Join our team to work on cutting-edge software solutions ...',
    },
  ],
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: {
      reducer: (state, action) => {
        state.allJobs.push(action.payload);
      },
      prepare: (job) => {
        return { payload: { ...job, id: nanoid() } };
      },
    },
  },
});

export const { addJob } = jobsSlice.actions;

export const selectMentorshipJobs = (state) => state.jobs.allJobs.slice(0, 3);
export const selectJobBoardJobs = (state) => state.jobs.allJobs.slice(0);

export default jobsSlice.reducer;