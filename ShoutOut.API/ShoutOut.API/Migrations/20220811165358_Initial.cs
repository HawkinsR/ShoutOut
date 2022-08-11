using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShoutOut.API.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserEmail = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Shouts",
                columns: table => new
                {
                    SOId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SODateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SOTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SOComment = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SOEdited = table.Column<bool>(type: "bit", nullable: false),
                    SOEditDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shouts", x => x.SOId);
                    table.ForeignKey(
                        name: "FK_Shouts_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Shouts_UserId",
                table: "Shouts",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Shouts");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
