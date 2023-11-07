UPDATE [dbo].[order_details]
SET [quantity]= [quantity] + @quantity
WHERE [product_id]=@product_id AND [user_id] = @user_id AND [order_id] is NULL AND [product_size] = product_size