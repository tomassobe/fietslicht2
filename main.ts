let status = 1
let interval = 100

basic.forever(function () {

    if( status == 0 )
    {
        //licht uit
        basic.clearScreen()
    } 
    else if (status == 1 )
    {
        //flikkeren
        basic.pause(interval)
        basic.showIcon(IconNames.Chessboard)
        basic.pause(interval)
        basic.clearScreen()
    }
    else if (status == 2 )
    {
        //licht aan
        basic.showIcon(IconNames.Chessboard)
    }
    else
    {
        //error
        basic.showIcon(IconNames.Sad)
    }

})


input.onButtonPressed(Button.A, function() {
    status++

    if( status > 2)
    {
        status = 0
    }
})


input.onButtonPressed(Button.B, function() {
    
    interval = interval - 50

    if( interval == 0 )
    {
        interval = 250
    }

})