

function test1(req, res){
    return res.json({
        name: "Ansar"
    }) ;
}

function test2(req, res){
    return res.json({
        ansar: "Name"
    })
}

module.exports ={
    test1,
    test2
}