const Attraction = require("../models/attraction");

// @desc   Create a new attraction
exports.createAttraction = async (req, res) => {
  try {
    const attraction = await Attraction.create(req.body);
    res.status(201).json({ status: "success", data: attraction });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// @desc   Get all attractions (with filtering, sorting, selecting, pagination)
exports.getAllAttractions = async (req, res) => {
  try {
    let queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach(el => delete queryObj[el]);

    // Advanced filtering (gte, gt, lte, lt)
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    let query = Attraction.find(JSON.parse(queryStr));

    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // Field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // Pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    const attractions = await query;
    res.status(200).json({
      status: "success",
      results: attractions.length,
      data: attractions
    });
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message });
  }
};