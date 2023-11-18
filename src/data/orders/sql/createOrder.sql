INSERT INTO [dbo].[orders]
    (
        [user_id],
        [note],
        [order_date],
        [status],
        [total]
    )
VALUES 
    (
        @user_id,
        @note,
        @order_date, 
        @status,
        @total
    )

SELECT * FROM [dbo].[orders]
WHERE [id]=SCOPE_IDENTITY();