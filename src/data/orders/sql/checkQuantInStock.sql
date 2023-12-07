SELECT CASE WHEN EXISTS (
    SELECT 1
    FROM [dbo].[products] as p
    INNER JOIN [dbo].[order_details] as od 
    ON p.[id] = od.[product_id]
    WHERE od.[user_id] = @user_id AND od.[order_id] is NULL AND od.[product_id] = @product_id AND od.[quantity] <= p.[quantity]
) THEN 1 ELSE 0 END AS Result;