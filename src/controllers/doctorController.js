import doctorServices from "../services/doctorServices";

let getTopDoctorForHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 8;
  try {
    let response = await doctorServices.getTopDoctorService(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server!!",
    });
  }
};

let getAllDoctors = async (req, res) => {
  try {
    const response = await doctorServices.getAllDoctorsService();
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server !!",
    });
  }
};

const saveInfoDoctor = async (req, res) => {
  try {
    let response = await doctorServices.saveInfoDoctorService(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server !!",
    });
  }
};

const getInfoDoctor = async (req, res) => {
  try {
    let inforDoctor = await doctorServices.getInfoDoctorService(req.query.id);
    return res.status(200).json(inforDoctor);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      message: "Error from server !!",
    });
  }
};

module.exports = {
  getTopDoctorForHome,
  getAllDoctors,
  saveInfoDoctor,
  getInfoDoctor,
};