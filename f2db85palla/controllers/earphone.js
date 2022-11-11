var Earphone = require('../models/earphone');
// List of all Earphones
exports.earphone_list = async function (req, res) {
    try {
        theEarphones = await Earphone.find();
        res.send(theEarphones);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}
// for a specific Earphone.
exports.costume_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await earphone.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

// Handle Earphone create on POST.
exports.earphone_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Earphone();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"earphone_type":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.Manufacture_Location = req.body.Manufacture_Location;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Earphone delete form on DELETE.
exports.earphone_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Earphone delete DELETE ' + req.params.id);
};
// Handle Earphone update form on PUT.
exports.earphone_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Earphone update PUT' + req.params.id);
};
exports.earphone_view_all_Page = async function (req, res) {
    try {
        theEarphones = await Earphone.find();

        res.render('earphones', { title: 'Earphone Search Results', results: theEarphones });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};