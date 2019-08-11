function myAlert(strMessage) {
  var divAlertText = document.getElementById("divAlertText");
  divAlertText.innerText = strMessage;
  $('#divMyAlert').modal('show')
}

function blockChart() {
  $('#divBlockChart').modal('show')
}

function showCode() {
  var strModName = document.getElementById("txtModName").value;
  createJsFromBlockly(strModName);
  document.getElementById("txtModName").style.display = "block";
}

function createJsFromBlockly(strModName) {
  if (strModName == "") {
    alert("Enter a valid javascript friendly name");
    return;
  }

  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var name = strModName;
  var code = "";
  code += "exports." + name + " = function(player){ \n ";
  code += "var drone = new Drone(player); \n ";
  code += Blockly.JavaScript.workspaceToCode();
  code += "\n\n }; \n ";
  document.getElementById("txtCode").value = code;

  return code;
}

function saveCode() {
  // Generate JavaScript code and display it.	
  var strModName = document.getElementById("txtModName").value;
  var txtCode = document.getElementById("txtCode");
  var txtBlocklyXML = document.getElementById("txtBlocklyXML");

  if (strModName == "") {
    alert("Enter a valid javascript friendly name");
    return;
  }

  //code generate JS
  var code = createJsFromBlockly(strModName);
  getBlocklyXml();

  if (txtCode.value == "") {
    alert("JavaScript is required");
    return;
  }

  if (txtBlocklyXML.value == "") {
    alert("Blockly XML is required");
    return;
  }

  var aMod = {};
  aMod.name = strModName;
  aMod.jsCode = code;
  aMod.blocklyXml = txtBlocklyXML.value;

  $.post("/save_js", aMod)
    .done(function () {
      alert("Script saved. \n\n Run the following: \n\n /js refresh()\n\n /js " + aMod.name + "(self)");
    })
    .fail(function () {
      alert("error saving code");
    })
}

function getBlocklyXml() {
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var text = Blockly.Xml.domToText(xml);
  document.getElementById("txtBlocklyXML").value = text;
}

function closeSketch(){
  window.location = "/";
}


function copyCode() {
  showCode();
  var copyTextarea = document.getElementById("txtCode");
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

}

Blockly.Blocks['box'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("type")
      .setCheck("String")
      .appendField("box type=");
    this.appendValueInput("width")
      .setCheck("Number")
      .appendField("width=");
    this.appendValueInput("height")
      .setCheck("Number")
      .appendField("height=");
    this.appendValueInput("depth")
      .setCheck("Number")
      .appendField("depth=");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['box'] = function (block) {
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_depth = Blockly.JavaScript.valueToCode(block, 'depth', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "drone.box(" + value_type + "," + value_width + "," + value_height + "," + value_depth + ");\n";
  return code;
};


Blockly.Blocks['box0'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("type")
      .setCheck("String")
      .appendField("box0 type=");
    this.appendValueInput("width")
      .setCheck("Number")
      .appendField("width=");
    this.appendValueInput("height")
      .setCheck("Number")
      .appendField("height=");
    this.appendValueInput("depth")
      .setCheck("Number")
      .appendField("depth=");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['box0'] = function (block) {
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_depth = Blockly.JavaScript.valueToCode(block, 'depth', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.box0(" + value_type + "," + value_width + "," + value_height + "," + value_depth + ");\n";
  return code;
};

Blockly.Blocks['up'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("blocks")
      .setCheck("Number")
      .appendField("up blocks=");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['up'] = function (block) {
  var value_blocks = Blockly.JavaScript.valueToCode(block, 'blocks', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.up(" + value_blocks + ");\n";
  return code;
};

Blockly.Blocks['fwd'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("blocks")
      .setCheck("Number")
      .appendField("fwd blocks=");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['fwd'] = function (block) {
  var value_blocks = Blockly.JavaScript.valueToCode(block, 'blocks', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.fwd(" + value_blocks + ");\n";
  return code;
};

Blockly.Blocks['turn'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("blocks")
      .setCheck("Number")
      .appendField("turn blocks=");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['turn'] = function (block) {
  var value_blocks = Blockly.JavaScript.valueToCode(block, 'blocks', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.turn(" + value_blocks + ");\n";
  return code;
};


Blockly.Blocks['left'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("blocks")
      .setCheck("Number")
      .appendField("left blocks=");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['left'] = function (block) {
  var value_blocks = Blockly.JavaScript.valueToCode(block, 'blocks', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.left(" + value_blocks + ");\n";
  return code;
};


Blockly.Blocks['right'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("blocks")
      .setCheck("Number")
      .appendField("right blocks=");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['right'] = function (block) {
  var value_blocks = Blockly.JavaScript.valueToCode(block, 'blocks', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.right(" + value_blocks + ");\n";
  return code;
};


Blockly.Blocks['chkpt'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("title")
      .setCheck("String")
      .appendField("checkPoint type=");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['chkpt'] = function (block) {
  var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.chkpt(" + value_title + ");\n";
  return code;
};

Blockly.Blocks['move'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("title")
      .setCheck("String")
      .appendField("moveToCheckPoint type=");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['move'] = function (block) {
  var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.move(" + value_title + ");\n";
  return code;
};

Blockly.Blocks['cylinder0'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("type")
      .setCheck("String")
      .appendField("cylinder0 type=");
    this.appendValueInput("radius")
      .setCheck("Number")
      .appendField("width=");
    this.appendValueInput("height")
      .setCheck("Number")
      .appendField("height=");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['cylinder0'] = function (block) {
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.cylinder0(" + value_type + "," + value_radius + "," + value_height + ");\n";
  return code;
};

Blockly.Blocks['cylinder'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("type")
      .setCheck("String")
      .appendField("cylinder type=");
    this.appendValueInput("radius")
      .setCheck("Number")
      .appendField("width=");
    this.appendValueInput("height")
      .setCheck("Number")
      .appendField("height=");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['cylinder'] = function (block) {
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.cylinder(" + value_type + "," + value_radius + "," + value_height + ");\n";
  return code;
};

Blockly.Blocks['prism'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("type")
      .setCheck("String")
      .appendField("prism type=");
    this.appendValueInput("width")
      .setCheck("Number")
      .appendField("width=");
    this.appendValueInput("depth")
      .setCheck("Number")
      .appendField("depth=");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['prism'] = function (block) {
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_depth = Blockly.JavaScript.valueToCode(block, 'depth', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.prism(" + value_type + "," + value_width + "," + value_depth + ");\n";
  return code;
};

Blockly.Blocks['prism0'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("type")
      .setCheck("String")
      .appendField("prism0 type=");
    this.appendValueInput("width")
      .setCheck("Number")
      .appendField("width=");
    this.appendValueInput("depth")
      .setCheck("Number")
      .appendField("depth=");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['prism0'] = function (block) {
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_depth = Blockly.JavaScript.valueToCode(block, 'depth', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.prism0(" + value_type + "," + value_width + "," + value_depth + ");\n";
  return code;
};

Blockly.Blocks['blocktype'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("type")
      .setCheck("String")
      .appendField("blocktype type=");
    this.appendValueInput("message")
      .setCheck("String")
      .appendField("message=");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['blocktype'] = function (block) {
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);


  var code = "drone.blocktype(" + value_message + "," + value_type + ");\n";
  return code;
};


Blockly.Blocks['sphere'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("type")
      .setCheck("String")
      .appendField("sphere type=");
    this.appendValueInput("radius")
      .setCheck("Number")
      .appendField("radius=");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['sphere'] = function (block) {
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);


  var code = "drone.sphere0(" + value_type + "," + value_radius + ");\n";
  return code;
};

Blockly.Blocks['hemisphere'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("type")
      .setCheck("String")
      .appendField("hemisphere type=");
    this.appendValueInput("radius")
      .setCheck("Number")
      .appendField("radius=");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['hemisphere'] = function (block) {
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "drone.hemisphere0(" + value_type + "," + value_radius + ",'north');\n";

  return code;
};

