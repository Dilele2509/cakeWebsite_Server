UPDATE [dbo].[orders]
SET [user_id]=@user_id,
    [receiver_phone] = @receiver_phone,
    [delivery_address] = @delivery_address,
    [note]=@note,
    [order_date]=@order_date,
    [payment_method] = @payment_method,
    [status]=@status,
    [total]=@total
WHERE [id]=@id

SELECT * FROM [dbo].[orders]
WHERE [id]=@id