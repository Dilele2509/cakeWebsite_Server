SELECT [product_id]
FROM [dbo].[order_details]
WHERE [user_id] = @user_id AND [order_id] is NULL

/* get all product_id in cart of user */