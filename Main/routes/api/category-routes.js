const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// be sure to include its associated Products
router.get('/', async (req, res) => {
  // find all categories
  try {
    const cateData = await Category.findAll({
      include: [
        {
          model: Product
        }
      ]
    });
    res.status(200).json(cateData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const findcateID = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!findcateID) {
      res.status(404).json({ message: 'No Ctegory found with that id!' });
      return;
    }
    res.status(200).json(findcateID);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCATE = await Category.create({

      category_name: req.body.category_name,
    });
    res.status(200).json(newCATE);
  }
  catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  try {

    const updatedcate = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json(updatedcate);

  } catch (err) {

    res.status(500).json(err);
  }
});
router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const deletCate = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletCate) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(deletCate);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
