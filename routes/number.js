const express = require("express")
const router = express.Router()
const NumberModel = require("../models/Number")
const verifyAdmin = require("../middleware/verifyAdmin")

router.post("/create-number", async (req, res) => {
  const {metaTitle, metaDesc, description, phone, ytLink, instLink,fbLink} = req.body;
  const number = new NumberModel({
    metaTitle,
    metaDesc,
    description,
    phone,
    ytLink,
    instLink,
    fbLink
  })
  await number.save()
  res.send(number)
});

router.get('/all-numbers', async (req, res) => {
  try {
    const id = "693d25c051c6930d781155ea"
    const allNumbers = await NumberModel.findById(id);
    res.status(200).json(allNumbers);
  } catch (error) {
    console.error('Error fetching numbers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.put("/edit-number", verifyAdmin ,async (req, res) => {
    try{
  const {metaTitle, metaDesc, description, phone, ytLink, instLink,fbLink} = req.body;
  const id = "693d25c051c6930d781155ea"
   const updatedNumber = {};
            if (metaTitle) updatedNumber.metaTitle = metaTitle;
            if (metaDesc) updatedNumber.metaDesc = metaDesc;
            if (description) updatedNumber.description = description;
            if (phone) updatedNumber.phone = phone;
            if (ytLink) updatedNumber.ytLink = ytLink;
            if (instLink) updatedNumber.instLink = instLink;
            if (fbLink) updatedNumber.fbLink = fbLink;
  const number = await NumberModel.findById(id);

const newNumber = await NumberModel.findByIdAndUpdate( id,
     {
    $set: updatedNumber
  },
  { new: true })

   if (!newNumber) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "Number Update", newNumber });
}
catch(error){
     console.error("Error updating contact number:", error);
    res.status(500).json({ error: "Internal server error" });
}
});




module.exports = router; 