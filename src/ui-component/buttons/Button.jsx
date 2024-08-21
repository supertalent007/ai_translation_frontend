export const Button = ({ item }) => {
    return (
        <Button
            variant="outlined"
            sx={{
                bgcolor: '#ede7f6',
                color: '#4527a0',
                '&:hover': {
                    bgcolor: '#5e35b1',
                    color: '#fff'
                }
            }}
        >
            {item}
        </Button>
    )
}