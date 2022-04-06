const express = require("express");
const router = express.Router();
const registerTemplateCopy = require("../models/registermodel");
const signUpTemplateCopy = require("../models/SignUpModels");
const courseTemplateCopy = require("../models/CourseModel");
const TeacherTemplateCopy = require("../models/TeacherRegister");

const randomstring = require("randomstring");
router.get('/',(req,res)=>{
res.send('backend');
})

router.post("/signup", async (request, response) => {
  const id = randomstring.generate({
    length: 12,
    charset: "hex",
  });
  try {
    const registration = new registerTemplateCopy({
      id: id,
      fullname: request.body.fullname,
      username: request.body.username,
      contact: request.body.contact,
      password: request.body.password,
      confirmPassword: request.body.confirmPassword,
    });
    registration
      .save()
      .then((data) => {
        response.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        response.json({ error: err });
      });
  } catch (err) {
    console.log(err);
    response.sendStatus(404);
  }
});

router.get("/signin/:username/:password", async (req, res) => {
  try {
    const data = await registerTemplateCopy
      .findOne({
       username: req.params.username,
      });
      console.log("success",data,req.params)

      if(data){
         
        if(data.password===req.params.password){
          console.log("success",data)
        // res.redirect('http://localhost:3000');
          res.json({status:200, data:data});
        }else{
          console.log("Invalid Credentials 1")
          res.json({ error:"Invalid Credentials"});
        }
      }
      else{
        console.log("Invalid Credentials")
        res.json({ error:"Invalid Credentials"});
      }
  } catch (err) {
    console.log(err);
  }
});

router.get("/get-profile/:username", async (req, res) => {
  try {
    await registerTemplateCopy
      .findOne({
       username: req.params.username,
      }).then((data) => {console.log(data);
        res.json(data);
      })
      .catch((err) => res.json(err));;
  } catch (err) {
    console.log(err);
  }
});

router.get("/get-data:id", async (req, res) => {
  try {
    await registerTemplateCopy
    .findOne({
      id: req.params.id,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(err);
  }
});
router.get("/get-all-profile", async (req, res) => {
  try {
    await registerTemplateCopy
    .find()
    
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(err);
  }
});

// router.get("/get-profile/:id", async (req, res) => {
//   try {
//     await registerTemplateCopy
//       .findOne({
//         id: req.params.id,
//       })
//       .then((data) => {
//         res.json(data);
//       })
//       .catch((err) => res.json(err));
//   } catch (err) {
//     console.log(err);
//   }
// });

router.get("/get-course/:note", async (req, res) => {
  try {
    await registerTemplateCopy
      .findOne({
        note: req.params.note,
      })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(err);
  }
});



router.post("/Teachersignup", async (request, response) => {
  const id = randomstring.generate({
    length: 12,
    charset: "hex",
  });
  try {
    const registers = new TeacherTemplateCopy({
      id: id,
      fullname: request.body.fullname,
      username: request.body.username,
      contact: request.body.contact,
      password: request.body.password,
      confirmPassword: request.body.confirmPassword,
    });
    registers
      .save()
      .then((data) => {
        response.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        response.json({ error: err });
      });
  } catch (err) {
    console.log(err);
    response.sendStatus(404);
  }
});
router.get("/Teachersignin/:username/:password", async (req, res) => {
  try {
    const data = await TeacherTemplateCopy
      .findOne({
       username: req.params.username,
      });
      console.log("success",data,req.params)

      if(data){
         
        if(data.password===req.params.password){
          console.log("success",data)
        // res.redirect('http://localhost:3000');
          res.json({status:200, data:data});
        }else{
          console.log("Invalid Credentials 1")
          res.json({ error:"Invalid Credentials"});
        }
      }
      else{
        console.log("Invalid Credentials")
        res.json({ error:"Invalid Credentials"});
      }
  } catch (err) {
    console.log(err);
  }
});

router.get("/get-Teacher-profile/:id", async (req, res) => {
  try {
    await TeacherTemplateCopy
      .findOne({
       id: req.params.id,
      }).then((data) => {console.log(data);
        res.json(data);
      })
      .catch((err) => res.json(err));;
  } catch (err) {
    console.log(err);
  }
});

//notes
router.post("/createnotes", async (request, response) => {
  console.log(request.body);
  try {
    const signedUpUser = await new signUpTemplateCopy({
      note: request.body.note,
    });
    signedUpUser
      .save()
      .then((data) => {
        response.sendStatus(200);
      })
      .catch((error) => {
        response.sendStatus(404);
      });
  } catch (err) {
    console.log(err);
    response.sendStatus(404);
  }
});

router.get("/get-all-data", async (req, res) => {
  try {
    await signUpTemplateCopy
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(err);
  }
});
router.post("/update-mail/:note", async (req, res) => {
  try {
    const data = await signUpTemplateCopy.findOneAndUpdate(
      {
        note: req.params.note,
      },
      {
        $set: {
          note: req.body.note,
        },
      }
    );

    if (data) {
      res.sendStatus(200);
    } else res.sendStatus(404);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

router.post("/delete-data/:note", async (req, res) => {
  try {
    const data = await signUpTemplateCopy.findOneAndDelete({
      note: req.params.note,
    });

    if (data) {
      res.json(data);
    } else res.sendStatus(404);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});
router.get("/get-data/:note", async (req, res) => {
  try {
    await registerTemplateCopy
      .findOne({
        note: req.params.note,
      })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(err);
  }
});




router.post("/createcourse", async (request, response) => {
  const id = randomstring.generate({
    length: 12,
    charset: "hex",
  });
  console.log(request.body)
  try {
    const course = new courseTemplateCopy({
      id: id,
      coursename: request.body.coursename,
      links: request.body.links,
      skills: request.body.skills,
      thumbnail: request.body.thumbnail,
      
    });
    course
      .save()
      .then((data) => {
        response.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        response.json({ error: err });
      });
  } catch (err) {
    console.log(err);
    response.sendStatus(404);
  }
});

router.get("/get-courses/:coursename", async (req, res) => {
  
  try {
    await courseTemplateCopy
      .findOne({
        coursename: req.params.coursename,
      })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(err);
  }
});

router.get("/get-course/:id", async (req, res) => {
  
  try {
    await courseTemplateCopy
      .findOne({
        id: req.params.id,
      })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(err);
  }
});
router.get("/get-all-courses", async (req, res) => {
  try {
    await courseTemplateCopy
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  } catch (err) {
    console.log(err);
  }
});




module.exports = router;
