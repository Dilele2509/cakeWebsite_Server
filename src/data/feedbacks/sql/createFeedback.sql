INSERT INTO [dbo].[feedbacks]
    (
        [user_id],
        [fullname],
        [email],
        [phone_number],
        [note]
    )
VALUES 
    (
        @role_name,
        @fullname,
        @email,
        @phone_number,
        @note
    )

SELECT * FROM [dbo].[feedbacks]
WHERE [id]=id