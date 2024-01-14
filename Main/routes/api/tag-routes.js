const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product
        },
      ]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  try {
    const findTagID = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!findTagID) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(findTagID);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  }
  catch (err) {
    res.status(400).json(err);
  }
});
// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {

  try {

    const updatedTag = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json(updatedTag);

  } catch (err) {

    res.status(500).json(err);
  }

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletTag) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(deletTag);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
