//[ Private Key | Key                                    Date | Time ]
//[ Text Input                                              Button   ]
class Input {
    constructor(yPos, height) {
        this.container = createDiv(); 
        this.container.position(0, yPos);
        this.container.size(displayWidth, height); 
        this.container.style('background-color', 'black'); 

        // Container for private key, date and time
        this.outputContainer = createDiv(); 
        this.outputContainer.parent(this.container); 
        this.outputContainer.size(displayWidth, height/4); 

        // Container for text input and button
        this.inputContainer = createDiv(); 
        this.inputContainer.style('display', 'flex');
        this.inputContainer.size(displayWidth, height - height/4); 
        this.inputContainer.parent(this.container); 
        
        // Text input using a <textarea> tag. 
        this.textInput = createElement('textarea');
        this.textInput.parent(this.inputContainer); 
        this.textInput.attribute('cols', '40'); 
        this.textInput.attribute('placeholder', 'Type Something...');
        this.textInput.style('display', 'flex');
        this.textInput.style('align-items', 'center');
        this.textInput.style('font-size', fontSize); 
        this.textInput.style('font-family', 'Menlo-Regular');
        this.textInput.style('font-color', fontColor);
        this.textInput.style('flex-grow', '2');
        this.textInput.style('padding-left', paddingHorizontal); 
        this.textInput.style('padding-right', paddingHorizontal); 
        this.textInput.style('padding-top', paddingVertical);
        this.textInput.style('padding-bottom', paddingVertical);
        this.textInput.style('box-sizing', 'border-box');

        // Encrypt button
        this.encrypt = createButton('ENCRYPT'); 
        this.encrypt.parent(this.inputContainer); 
        this.encrypt.attribute('disabled', true); // Enable it when there is text in text input
        this.encrypt.style('flex-grow', '1');
        this.encrypt.style('background', 'linear-gradient(90deg, rgba(179,179,179,1) 12%, rgba(255,254,254,1) 100%');
        this.encrypt.style('background-color', '#ddd');
        this.encrypt.style('color', '#322f2f');
        this.encrypt.style('text-shadow', '0px 1px 0px #594646');
        this.encrypt.style('font-familty', 'Menlo-Regular');
        this.encrypt.style('font-color', fontColor);
        this.encrypt.style('font-size', fontSize);
    }
}