const app = import('./api/index'); // Import the Express app

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Local server running on port ${PORT}`);
});
