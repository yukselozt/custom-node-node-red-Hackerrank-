module.exports = function (RED) {
  function CustomNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("input", function (msg) {
      for (var i = 0; i < msg.payload.apple_distances.length; i++) {
        if (
          msg.payload.apple_tree + parseInt(msg.payload.apple_distances[i]) >=
            msg.payload.sams_house_x1 &&
          msg.payload.apple_tree + parseInt(msg.payload.apple_distances[i]) <=
            msg.payload.sams_house_x2
        ) {
          msg.payload.counter_apple++;
        }
      }

      for (var i = 0; i < msg.payload.orange_distances.length; i++) {
        if (
          msg.payload.orange_tree + parseInt(msg.payload.orange_distances[i]) >=
            msg.payload.sams_house_x1 &&
          msg.payload.orange_tree + parseInt(msg.payload.orange_distances[i]) <=
            msg.payload.sams_house_x2
        ) {
          msg.payload.counter_orange++;
        }
      }

      console.log(msg.payload.counter_apple);
      console.log(msg.payload.counter_orange);

      node.send(msg);
    });
  }
  RED.nodes.registerType("custom-node", CustomNode);
};
