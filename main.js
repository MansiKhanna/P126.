function setup() {
    canvas.createCanvas (30, зее);
    canvas.center();
    video.createCapture(VIDEO);
    video.hide();
    classifier.m15.imageClassifier('https://teachablemachine.withgoogle.com/models/hqNW3AxG2/model.json'), modelLoade
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
    image (video, 8, 8, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
    console.error(error);
    } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[e].confidence.toFixed(3);
    }
}