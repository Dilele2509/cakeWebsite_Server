UPDATE [dbo].[order_details]
SET [order_id]=@order_id
WHERE [user_id]=@user_id AND order_id is NULL

SELECT * FROM [dbo].[order_details]
WHERE [order_id]=@order_id;