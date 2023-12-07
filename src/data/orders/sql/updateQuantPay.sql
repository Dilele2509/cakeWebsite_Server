UPDATE [dbo].[products]
SET [quantity] = [quantity] - (
    SELECT TOP 1 [quantity]
    FROM [dbo].[order_details]
    WHERE [product_id] = @product_id AND [user_id] = @user_id AND [order_id] = @order_id
)
WHERE [id] = @product_id;

SELECT [quantity] FROM [dbo].[products] WHERE [id] = @product_id