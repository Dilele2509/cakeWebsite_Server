UPDATE [dbo].[orders]
SET [user_id]=@user_id,
    [note]=@note,
    [order_date]=@order_date,
    [status]=@status,
    [total]=@total
WHERE [id]=@id

SELECT * FROM [dbo].[orders]
WHERE [id]=@id