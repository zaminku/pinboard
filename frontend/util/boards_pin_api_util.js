export const savePinToBoard = (pinId, boardId) => (
    $.ajax({
        method: 'POST',
        url: '/api/boards_pins',
        data: {boardsPin: {pinId, boardId}}
    })
)