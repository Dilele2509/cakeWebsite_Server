INSERT INTO [dbo].[orders]
    (
        [user_id],
        [note],
        [receiver_phone],
        [delivery_address],
        [order_date],
        [payment_method],
        [transport_fee],
        [status],
        [total]
    )
VALUES 
    (
        @user_id,
        @note,
        @receiver_phone,
        @delivery_address,
        @order_date, 
        @payment_method,
        @transport_fee,
        @status,
        @total
    )

SELECT * FROM [dbo].[orders]
WHERE [id]=SCOPE_IDENTITY();