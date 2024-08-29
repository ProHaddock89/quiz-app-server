// controller

const quizController = {
    // create new quiz
    Create : async (req, res) => {
        try {
            res.json({data : req.body})
        } catch (error) {
            res.status(500).json({message : error})
        }
    },
    Update : async (req, res) => {
        try {
            res.json({data : req.body})
        } catch (error) {
            res.status(500).json({message : error})
        }
    },
    Fetch : async (req, res) => {
        try {
            res.json({data : ""})
        } catch (error) {
            res.status(500).json({message : error})
        }
    },
    Delete : async (req, res) => {
        const {id} = req.params
        try {
            res.json({data : ""})
        } catch (error) {
            res.status(500).json({message : error})
        }
    }
}

module.exports = quizController